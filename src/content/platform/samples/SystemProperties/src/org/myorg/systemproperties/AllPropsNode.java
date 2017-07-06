package org.myorg.systemproperties;

import java.io.IOException;
import javax.swing.Action;
import org.netbeans.api.core.ide.ServicesTabNodeRegistration;
import org.openide.DialogDisplayer;
import org.openide.NotifyDescriptor;
import org.openide.actions.NewAction;
import org.openide.actions.OpenLocalExplorerAction;
import org.openide.actions.PropertiesAction;
import org.openide.actions.ToolsAction;
import org.openide.nodes.AbstractNode;
import org.openide.nodes.Children;
import org.openide.nodes.Node;
import org.openide.util.HelpCtx;
import org.openide.util.NbBundle.Messages;
import org.openide.util.actions.SystemAction;
import static org.myorg.systemproperties.Bundle.*;
import org.openide.util.datatransfer.NewType;

@ServicesTabNodeRegistration(name = "AllPropsNode",
displayName = "#LBL_AllPropsNode",
shortDescription = "#HINT_AllPropsNode",
iconResource = "org/myorg/systemproperties/allPropsIcon.gif",
position = 2021)
@Messages({
    "LBL_AllPropsNode=System Properties",
    "HINT_AllPropsNode=Shows all currently set system properties."
})
public class AllPropsNode extends AbstractNode {

    public AllPropsNode() {
        super(Children.create(new AllPropsChildFactory(), false));
        setDisplayName(LBL_AllPropsNode());
        setShortDescription(HINT_AllPropsNode());
        setIconBaseWithExtension("org/myorg/systemproperties/allPropsIcon.gif");
    }

    @Override
    public Action[] getActions(boolean context) {
        Action[] result = new Action[]{
            new RefreshPropsAction(),
            null,
            SystemAction.get(OpenLocalExplorerAction.class),
            null,
            SystemAction.get(NewAction.class),
            null,
            SystemAction.get(ToolsAction.class),
            SystemAction.get(PropertiesAction.class),};
        return result;
    }

    @Override
    public HelpCtx getHelpCtx() {
        return HelpCtx.DEFAULT_HELP;
    }

    @Override
    public Node cloneNode() {
        return new AllPropsNode();
    }

    @Messages({
        "LBL_NewProp=System Property",
        "LBL_NewProp_dialog=Create New Property",
        "MSG_NewProp_dialog_key=New property name:",
        "MSG_NewProp_dialog_value=New property value:"})
    @Override
    public NewType[] getNewTypes() {
        return new NewType[]{
            new NewType() {

                @Override
                public String getName() {
                    return LBL_NewProp();
                }

                @Override
                public void create() throws IOException {
                    NotifyDescriptor.InputLine msg = new NotifyDescriptor.InputLine(LBL_NewProp_dialog(), MSG_NewProp_dialog_key());
                    DialogDisplayer.getDefault().notify(msg);
                    String key = msg.getInputText();
                    if ("".equals(key)) {
                        return;
                    }
                    msg = new NotifyDescriptor.InputLine(MSG_NewProp_dialog_value(), MSG_NewProp_dialog_key());
                    DialogDisplayer.getDefault().notify(msg);
                    String value = msg.getInputText();
                    System.setProperty(key, value);
                    PropertiesNotifier.changed();
                }
            }
        };
    }
    
}