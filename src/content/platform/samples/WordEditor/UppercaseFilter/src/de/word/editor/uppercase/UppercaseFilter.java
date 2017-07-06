
package de.word.editor.uppercase;

import de.word.editor.api.WordEditorInterface;
import org.openide.util.lookup.ServiceProvider;

@ServiceProvider(position=20, service=WordEditorInterface.class)
public class UppercaseFilter implements WordEditorInterface {

    @Override
    public String name() {
       return "Uppercase";
    }

    @Override
    public String process(String text) {
        return text.toUpperCase();
    }

    @Override
    public String toString() {
        return name();
    }

}
