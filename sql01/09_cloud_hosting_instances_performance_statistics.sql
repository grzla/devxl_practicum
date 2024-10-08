/*
A cloud hosting provider dashboard that is in development requires a query that returns a list of networks where at least one instance within them has reached its maximum CPU usage threshold.

The result should have the following columns: cidr | instances | avg_cpu_usage | avg_memory_usage | avg_network_usage.

    cidr - network CIDR
    instances - total number of instances for a specific network
    avg_cpu_usage - average CPU usage of instances for a specific network
        Record format is ##%, where the placeholders are ## in the order they appear:
            Average CPU usage across all instances of a specific network, rounded up to the nearest integer
    avg_memory_usage - average memory usage of instances for a specific network
        Record format is ##%, where the placeholders are ## in the order they appear:
            Average memory usage across all instances of a specific network, rounded up to the nearest integer
    avg_network_usage - average network usage of instances for a specific network
        Record format is ##%, where the placeholders are ## in the order they appear:
            Average network usage across all instances of a specific network, rounded up to the nearest integer

The result should be sorted in ascending order by cidr.

Schema
name	type	constraint	description
networks			
id	INT	PRIMARY KEY	Network ID
cidr	VARCHAR(255)		IP Address v4 CIDR
name	type	constraint	description
instances			
network_id	INT	FOREIGN KEY (network_id => networks.id)	Network ID
cpu_usage	VARCHAR(255)		CPU usage
memory_usage	VARCHAR(255)		Memory usage
network_usage	VARCHAR(255)		Network usage

Note:

    The maximum CPU usage threshold is 80%.
*/

select
    n.cidr,
    count(i.network_id) as instances, 
    concat(ceil(avg(i.cpu_usage)), "%") as avg_cpu_usage,
    concat(ceil(avg(i.memory_usage)), "%") as avg_memory_usage,
    concat(ceil(avg(i.network_usage)), "%") as avg_network_usage
from networks n
join instances i
    on n.id = i.network_id
where 
    n.id in (
        -- subquery to find networks with at least one instance with cpu_usage >= 80
        select i.network_id
        from instances i
        where i.cpu_usage >= 80
    )
group by 
    n.cidr
order by 
    n.cidr