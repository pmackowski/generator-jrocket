package <%=packageName%>.config.spark;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pmackowski on 2015-12-09.
 */
@Configuration
public class SparkConfiguration {

    @Autowired(required = false)
    private List<Spark> sparks = new ArrayList<>();

    @Bean
    CommandLineRunner sparkRunner() {
        return args -> sparks.stream().forEach( spark -> spark.register());
    }

}

