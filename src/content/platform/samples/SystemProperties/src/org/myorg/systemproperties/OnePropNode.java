package org.myorg.systemproperties;

import java.io.IOException;
import java.util.Properties;
import javax.swing.Action;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import org.openide.actions.DeleteAction;
import org.openide.actions.PropertiesAction;
import org.openide.actions.RenameAction;
import org.openide.actions.ToolsAction;
import org.openide.nodes.AbstractNode;
import org.openide.nodes.Children;
import org.openide.nodes.Node;
import org.openide.nodes.PropertySupport;
import org.openide.nodes.Sheet;
import org.openide.util.NbBundle.Messages;
import org.openide.util.actions.SystemAction;
import static org.myorg.systemproperties.Bundle.*;

public class OnePropNode extends AbstractNode {

    private String key;
    private ChangeListener listener;

    @Messages("HINT_OnePropNode=Represents one system property.")
    public OnePropNode(String key) {
        super(Children.LEAF);
        this.key = key;
        setIconBaseWithExtension("org/myorg/systemproperties/onePropIcon.gif");
        super.setName(key);
        setShortDescription(HINT_OnePropNode());
    }

    @Override
    public Action[] getActions(boolean context) {
        Action[] result = new Action[]{
            SystemAction.get(DeleteAction.class),
            SystemAction.get(RenameAction.class),
            null,
            SystemAction.get(ToolsAction.class),
            SystemAction.get(PropertiesAction.class),};
        return result;
    }

    @Override
    public Node cloneNode() {
        return new OnePropNode(key);
    }

    @Messages({"PROP_value=Value","HINT_value=Value of this system property."})
    @Override
    protected Sheet createSheet() {
        Sheet sheet = super.createSheet();
        Sheet.Set props = sheet.get(Sheet.PROPERTIES);
        if (props == null) {
            props = Sheet.createPropertiesSet();
            sheet.put(props);
        }
        props.put(new PropertySupport.Name(this));
        class ValueProp extends PropertySupport.ReadWrite {
            public ValueProp() {
                super("value", String.class, PROP_value(), HINT_value());
            }
            @Override
            public Object getValue() {
                return System.getProperty(key);
            }
            @Override
            public void setValue(Object nue) {
                System.setProperty(key, (String) nue);
                PropertiesNotifier.changed();
            }
        }
        props.put(new ValueProp());
        PropertiesNotifier.addChangeListener(listener = new ChangeListener() {

            @Override
            public void stateChanged(ChangeEvent ev) {
                firePropertyChange("value", null, null);
            }
        });
        return sheet;
    }

    @Override
    protected void finalize() throws Throwable {
        super.finalize();
        if (listener != null) {
            PropertiesNotifier.removeChangeListener(listener);
        }
    }

    @Override
    public boolean canRename() {
        return true;
    }

    @Override
    public void setName(String nue) {
        Properties p = System.getProperties();
        String value = p.getProperty(key);
        p.remove(key);
        if (value != null) {
            p.setProperty(nue, value);
        }
        System.setProperties(p);
        PropertiesNotifier.changed();
    }

    @Override
    public boolean canDestroy() {
        return true;
    }

    @Override
    public void destroy() throws IOException {
        Properties p = System.getProperties();
        p.remove(key);
        System.setProperties(p);
        PropertiesNotifier.changed();
    }
    
}