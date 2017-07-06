/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.myorg.googletoolbar;

import java.awt.Component;
import java.awt.event.ActionEvent;
import javax.swing.AbstractAction;
import org.openide.awt.ActionRegistration;
import org.openide.awt.ActionReference;
import org.openide.awt.ActionReferences;
import org.openide.awt.ActionID;
import org.openide.util.NbBundle.Messages;
import org.openide.util.actions.Presenter;

@ActionID(category = "File",
id = "org.myorg.googletoolbar.GoogleAction")
@ActionRegistration(iconBase = "org/myorg/googletoolbar/google.png",
displayName = "#CTL_GoogleAction")
@ActionReferences({
    @ActionReference(path = "Toolbars/File", position = 0)
})
@Messages("CTL_GoogleAction=Google Action")
public final class GoogleAction extends AbstractAction implements Presenter.Toolbar {

    @Override
    public void actionPerformed(ActionEvent e) {
        // TODO implement action body
    }

    @Override
    public Component getToolbarPresenter() {
        return new GooglePanel();
    }

}
