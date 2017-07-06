
package de.word.editor.lowercase;

import de.word.editor.api.WordEditorInterface;
import org.openide.util.lookup.ServiceProvider;

@ServiceProvider(position=10, service=WordEditorInterface.class)
public class LowercaseFilter implements WordEditorInterface {

    @Override
    public String name() {
       return "Lowercase";
    }

    @Override
    public String process(String text) {
        return text.toLowerCase();
    }

    @Override
    public String toString() {
        return name();
    }

}
