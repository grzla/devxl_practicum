with triangle_type as (
    select a, b, c,
    case 
        when (a + b) <= c or (a + c) <= b or (b + c) <= a then 'Not A Triangle'
        when a = b and b = c then 'Equilateral'
        when a = b or b = c or a = c then 'Isosceles'
        when a != b and b != c and a != c then 'Scalene'
    end as triangle_category
    from triangles
)
select triangle_category from triangle_type;