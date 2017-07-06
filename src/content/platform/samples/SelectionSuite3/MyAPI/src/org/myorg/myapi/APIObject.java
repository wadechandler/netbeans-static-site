/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.myorg.myapi;

import java.util.Date;

/**
 *
 * @author gwielenga
 */
public final class APIObject {

   private final Date date = new Date();
   private static int count = 0;
   private final int index;

   public APIObject() {
      index = count++;
   }

   public Date getDate() {
      return date;
   }

   public int getIndex() {
      return index;
   }
   
   public String toString() {
       return index + " - " + date;
   }
   
}
