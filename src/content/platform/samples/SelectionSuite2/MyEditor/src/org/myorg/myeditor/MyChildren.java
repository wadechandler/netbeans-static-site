/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.myorg.myeditor;

import java.util.Arrays;
import java.util.List;
import org.myorg.myapi.APIObject;
import org.openide.nodes.AbstractNode;
import org.openide.nodes.ChildFactory;
import org.openide.nodes.Children;
import org.openide.nodes.Node;
import org.openide.util.lookup.Lookups;

/**
 *
 * @author gwielenga
 */
public class MyChildren extends ChildFactory<APIObject> {

    @Override
    protected boolean createKeys(List<APIObject> toPopulate) {
        APIObject[] objs = new APIObject[5];
        for (int i = 0; i < objs.length; i++) {
            objs[i] = new APIObject();
        }
        toPopulate.addAll(Arrays.asList(objs));
        return true;
    }

    @Override
    protected Node createNodeForKey(APIObject key) {
        Node result = new AbstractNode(Children.create(new MyChildren(), true), Lookups.singleton(key));
        result.setDisplayName(key.toString());
        return result;
    }
    
}
