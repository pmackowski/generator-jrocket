package <%=packageName%>.config.spark;

import com.google.gson.Gson;
import spark.ResponseTransformer;

/**
 * Created by pmackowski on 2015-12-09.
 */
public class JsonUtil {
    public static String toJson(Object object) {
        return new Gson().toJson(object);
    }
    public static ResponseTransformer json() {
        return JsonUtil::toJson;
    }
}
