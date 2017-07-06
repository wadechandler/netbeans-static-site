/**
 * Licence agreement processing class
 *
 * Checks for agreement cookie for specific ide version and if not set
 * injects the agreement form and disable the download elements
 *
 * HARD DEPENDENCY: www/images_www/js/js.cookie.js - cookie handling class
 *
 * @param {string} page
 * @param {string} ideVersion
 * @param {string} licenceLink
 * @param {jQuery DOM Object} elementToPrependTo
 * @returns {LicenceAgreement}
 */
var LicenceAgreement = function (page, ideVersion, licenceLink, elementToPrependTo) {
    this._licenceAccepted = false;
    this._page = page;
    this._ideVersion = ideVersion;
    this._licenceLink = licenceLink;
    this._cookieName = this.COOKIE_NAME + '_' + ideVersion;
    this._elementToPrependTo = elementToPrependTo;
    this._originalWindowOnLoadFnc = false;
    this._formInjected = false;

    this.PAGE_INDEX = 'index';
    this.PAGE_START = 'start';
    this.PAGE_ZIP = 'zip';
    this.COOKIE_NAME = 'NETBEANS_DOWNLOAD_AGREEMENT';
    this.COOKIE_EXPIRES = 1;
    this.COOKIE_ACCEPT = 'accept';

    // check for cookie
    if (Cookies.get(this._cookieName) === this.COOKIE_ACCEPT) {
        this._licenceAccepted = true;
        $('#licence-agreement').hide();
    }

    // stop all onload on start page
    if (this._page === this.PAGE_START) {
        this._originalWindowOnLoadFnc = window.onload;
        if (!this._licenceAccepted) {
            window.onload = function () {
                // dummy just to stop the auto download start from start.js
            };
        }
    }
    this._rebindLangAndPLatformCombo();
};

LicenceAgreement.prototype._rebindLangAndPLatformCombo = function () {
    var self = this;
    // rebind the lang combo update so we inject the agreement processing
    $('#language_select, #platform_select').change(function () {
        update();
        self.checkForAgreementAndEnableElements();
    });
};


LicenceAgreement.prototype.checkForAgreementAndEnableElements = function () {
    if (!this._licenceAccepted) {
        this._disableElements();
        this._injectAgreementForm();
    }
};

LicenceAgreement.prototype._injectAgreementForm = function () {
    var self = this;
    if (!self._formInjected) {
        var topMargin = this._page === this.PAGE_ZIP ? '20px' : '0px';
        var form = '<div id="licence-agreement" style="border: 1px solid #c1c1c1;border-radius: 5px;padding:10px;width:75%;margin: ' + topMargin + ' auto 20px auto;text-align:center;"><p>You must accept the <a href="$LINK$" target="_blank">NetBeans IDE $VERSION$ License Agreement</a> to download this software</p><div id="licence-agreement-radios" style="text-align: center;"><span class="radio-agree"><input type="radio" id="licence-agreement-radios-accept" name="accept"> <label for="licence-agreement-radios-accept">Accept License Agreement</label></span><span class="radio-decline" style="padding-left:30px;"><input class="radio-right" type="radio" id="licence-agreement-radios-decline" name="accept"> <label for="licence-agreement-radios-decline">Decline License Agreement</label></span></div></div>';
        this._elementToPrependTo.before(form.replace('$LINK$', this._licenceLink).replace('$VERSION$', this._ideVersion));
        // now bind clicks to form
        $('.radio-agree').click(function (e) {
            e.preventDefault();
            self._acceptLicence();
            self._enableElements();
        });
        this._formInjected = true;
    }
};

LicenceAgreement.prototype._acceptLicence = function () {
    this._licenceAccepted = true;
    Cookies.set(this._cookieName, this.COOKIE_ACCEPT, {expires: this.COOKIE_EXPIRES});
    // trigger the original onload fnc if was set
    if (typeof this._originalWindowOnLoadFnc === 'function') {
        this._originalWindowOnLoadFnc();
    }
};

LicenceAgreement.prototype._disableElements = function () {
    this._toggleElements('disable');
};

LicenceAgreement.prototype._enableElements = function () {
    this._toggleElements('enable');
};

LicenceAgreement.prototype._toggleElements = function (mode) {
    var $dlButtons = $('.download_button a');
    var $dlImgs = $('.download_button img');
    var $licenceForm = $('#licence-agreement');
    var $zipLink = $('#zip_link');
    var $directDlLink = $('a.download_link');
    var $zipFiles = $('.files_list');
    var self = this;
    if (mode === 'enable') {
        // ===== enable =====
        $licenceForm.fadeOut();
        // index page
        $dlImgs.css('opacity', '1');
        $dlButtons.click(function (e) {
            e.preventDefault();
            //console.log('pack: '+self._getPackName($(this).attr('id'))+'; arch: '+self._getArchitectureName($(this).attr('href')));
            download(self._getPackName($(this).attr('id')), self._getArchitectureName($(this).attr('href')));
        });
        $zipLink.click(function (e) {
            e.preventDefault();
            open_zip_link();
        });
        // start page
        $directDlLink.click(function (e) {
            window.location = $(this).attr('href');
        });
        // zip page
        $zipFiles.show();
    } else {
        // ===== disable =====
        // index page
        $dlImgs.css('opacity', '0.3');
        $dlButtons.click(function (e) {
            e.preventDefault();
            $('#licence-agreement').fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        });
        $zipLink.click(function (e) {
            e.preventDefault();
            $("html, body").animate({scrollTop: 0}, 200);
            $('#licence-agreement').fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        });
        // start page
        $directDlLink.click(function (e) {
            e.preventDefault();
            $('#licence-agreement').fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        });
        // zip page
        $zipFiles.hide();
    }
};

LicenceAgreement.prototype._getPackName = function (id) {
    return id.split('_')[0];
};

LicenceAgreement.prototype._getArchitectureName = function (id) {
    return  id.match(/javascript: download\(\'(.*)\',\'(.*)\'\)/)[2] || '';
};

