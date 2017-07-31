import groovy.json.JsonBuilder
import java.io.File
import java.util.concurrent.ConcurrentHashMap
import java.util.List
import java.util.Properties
import org.yaml.snakeyaml.Yaml

class Utils {
    
    static final globals = new ConcurrentHashMap()
    
    static def Map flatten(Map m, String separator = '.') { 
        m.collectEntries { k, v ->  v instanceof Map ? flatten(v, separator).collectEntries { q, r ->  [(k + separator + q): r] } : [(k):v] } 
    }

    //load the actual globals.yml file and setup for use by all config
    static def loadGlobals(File globalsFile) {
        if(globalsFile.exists()) {
            def map = loadYaml(globalsFile)          
            globals.putAll(map)
        }
    }

    static def loadYaml(File ymlFile) {
        def yaml = new Yaml()
        return yaml.load(ymlFile.text)
    }
    
    static def createMergeData(String yml, String file) {
        return new MergeData(yml: yml, file: file)
    }

    static def parseJBakeTags(def tags) {
        if(tags instanceof String) {
            return tags
        } else if (tags instanceof List) {
            return tags.join(",")
        } else {
            throw new IllegalStateException("The metadata tags must either be a string or a list.")
        }
    }
    
    static def writeCommonJBakeProperties(def data, def map, def out) {
        boolean foundType = false,
        foundStatus = false
        
        map.each { k, v ->
            switch(k) {
            case "type":
                if(v) {
                    foundType = true;
                }
                break;
            case "status":
                if(v) {
                    foundStatus = true;
                }
                break;
            default:
                break;
            }
            switch(k) {
            case "type":
            case "status":
            case "title":
            case "date":
                out << "${k}=${v}\n"
                break;
            case "tags":
                out << "${k}=${parseJBakeTags(v)}\n"
                break;
            default:
                //the rest we don't care about right now
                //we'll add that separately
                break;
            }
        }
        if(!foundType) {
            throw new IllegalStateException("The metadata for ${data.file} at ${data.yml} must include the type.")
        }
        if(!foundStatus) {
            throw new IllegalStateException("The metadata for ${data.file} at ${data.yml} must include the status.")
        }
    }
    
    /**
     * Merges a content file and a YAML file to match the expected values and format for JBake
     * @param data a specific yaml and file combination to merge together
     */
    static def mergeContentAndMetadata(MergeData data) {
        def contentFile = new File(data.file)
        def ymlFile = new File(data.yml)
        def yml = loadYaml(ymlFile)
        def jb = new JsonBuilder(yml)
        //store content for a moment
        def cdata = contentFile.text
        contentFile.withWriter "UTF-8", { out ->
            writeCommonJBakeProperties(data, yml, out)
            out << "metadata=${jb.toString()}\n"
            out << "~~~~~~\n"
            out << cdata
        }
    }
}