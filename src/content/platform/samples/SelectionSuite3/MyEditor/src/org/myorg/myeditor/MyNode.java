/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.myorg.myeditor;

import org.myorg.myapi.APIObject;
import org.openide.nodes.AbstractNode;
import org.openide.nodes.Children;
import org.openide.util.lookup.Lookups;

/**
 *
 * @author gwielenga
 */
public class MyNode extends AbstractNode {

    public MyNode(APIObject obj) {
        super(Children.create(new MyChildren(), true), Lookups.singleton(obj));
        setDisplayName("APIObject " + obj.getIndex());
    }

    public MyNode() {
        super(Children.create(new MyChildren(), true));
        setDisplayName("Root");
    }

    @Override
    public String getHtmlDisplayName() {
        APIObject obj = getLookup().lookup(APIObject.class);
        if (obj != null && obj.getIndex() % 2 != 0) {
            return "<font color='0000FF'>APIObject " + obj.getIndex() + "</font>";
        } else {
            return null;
        }
    }
    
}