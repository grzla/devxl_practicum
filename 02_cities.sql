DECLARE
    TYPE city_type IS RECORD (
        city_name CITY.CITY%TYPE,
        population CITY.POPULATION%TYPE
    );
    TYPE city_table_type IS TABLE OF city_type;
    city_table city_table_type := city_table_type();
BEGIN
    -- Add existing cities from the CITY table
    FOR r IN (SELECT CITY, POPULATION FROM CITY) LOOP
        city_table.EXTEND;
        city_table(city_table.COUNT).city_name := r.CITY;
        city_table(city_table.COUNT).population := r.POPULATION;
    END LOOP;

    -- Add missing cities manually to the collection
    city_table.EXTEND;
    city_table(city_table.COUNT).city_name := 'Los Angeles';
    city_table(city_table.COUNT).population := 3900000;
    
    city_table.EXTEND;
    city_table(city_table.COUNT).city_name := 'Philadelphia';
    city_table(city_table.COUNT).population := 1600000;
    
    city_table.EXTEND;
    city_table(city_table.COUNT).city_name := 'San Diego';
    city_table(city_table.COUNT).population := 1390000;

    -- Sort the cities by population (ascending order)
    FOR i IN 1..city_table.COUNT-1 LOOP
        FOR j IN i+1..city_table.COUNT LOOP
            IF city_table(i).population > city_table(j).population THEN
                -- Swap the cities
                DECLARE
                    temp_city city_type;
                BEGIN
                    temp_city := city_table(i);
                    city_table(i) := city_table(j);
                    city_table(j) := temp_city;
                END;
            END IF;
        END LOOP;
    END LOOP;

    -- Output the results in the format "City.Population"
    FOR i IN 1..city_table.COUNT LOOP
        DBMS_OUTPUT.PUT_LINE(city_table(i).city_name || '.' || city_table(i).population);
    END LOOP;
END;
