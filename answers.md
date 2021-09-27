### 1 On average, how many requests can ab complete in 10 seconds with all the power of two concurrency levels between 1 and 256 (i.e., 1, 2, 4, 8, 16, 32, 64, 128, 256)?
The performance on requesting https for ab benchmark in 10 seconds is: 

concurrency level  |  requests serviced
1                  |  
2                  |
4                  |
8                  |
16                 |
32                 |
64                 |
128                |
256                |


### 2 Why are there diminishing returns at higher concurrency levels?
There are diminishing returns at higher concurrency levels, that is the number of requests per second does not scale proportionately with the increase in concurrency. This likely happens because the server has some maximum threshold of concurrent requests that it can service at a given time. So all requests beyond this number will have to stall until previous requests are serviced. This creates a bottleneck, and hence higher concurrency levels do not necessarily mean higher requests serviced per second.

### 3 What’s the performance difference when requesting HTTP and HTTPS?
Similar to question 1, the performance on requesting http for ab benchmark in 10 seconds is: 


### 4 How can github respond so quickly?
Github pages publishes static websites, which decreases the response time of these webpages. This is because, a static website doesn't need to generate content in real time from a database stored in the server.

### 5 What is your site’s “Time to Interactive” according to PageSpeed Insights?
Time to Interactive - 0.8s


