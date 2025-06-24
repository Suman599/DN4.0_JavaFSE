package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Checks if two values are equal
        assertEquals(5, 2 + 3);

        // Checks if the condition is true
        assertTrue(5 > 3);

        // Checks if the condition is false
        assertFalse(5 < 3);

        // Checks if the object is null
        assertNull(null);

        // Checks if the object is not null
        assertNotNull(new Object());
    }
}
