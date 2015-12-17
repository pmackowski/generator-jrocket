package <%=packageName%>

import org.springframework.boot.test.SpringApplicationConfiguration
import spock.lang.Specification

@SpringApplicationConfiguration(classes = Application.class)
class ApplicationSpec extends Specification {

    def "testContextLoads"()  {
        expect:
        1 == 1
    }

}
