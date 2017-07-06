package org.myorg.systemproperties;

import javax.swing.event.ChangeListener;
import org.openide.util.ChangeSupport;

public class PropertiesNotifier {

    private static final ChangeSupport cs = new ChangeSupport(PropertiesNotifier.class);

    public static void addChangeListener(ChangeListener listener) {
        cs.addChangeListener(listener);
    }

    public static void removeChangeListener(ChangeListener listener) {
        cs.removeChangeListener(listener);
    }

    public static void changed() {
        cs.fireChange();
    }
    
}