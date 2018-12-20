# Undertone
## General Compatibility
|Feature|  |
|---|---|
| Consent |  |
| Native Ad Support | N |
| SafeFrame Support | Y |
| PMP Support | N |
 
## Browser Compatibility
| Browser |  |
|--- |---|
| Chrome | Y |
| Edge | Y |
| Firefox | Y |
| Internet Explorer 9 |  |
| Internet Explorer 10 |  |
| Internet Explorer 11 |  |
| Safari |  |
| Mobile Chrome | |
| Mobile Safari | |
| UC Browser | |
| Samsung Internet | |
| Opera | |
 
## Adapter Information
| Info | |
|---|---|
| Partner Id | UndertoneHtb |
| Ad Server Responds in (Cents, Dollars, etc) | Cents |
| Bid Type (Gross / Net) | |
| GAM Key (Open Market) | |
| GAM Key (Private Market) | |
| Ad Server URLs | //hb.undertone.com/hb |
| Slot Mapping Sytle (Size / Multiple Sizes / Slot) | Multiple Sizes |
| Request Architecture (MRA / SRA) | SRA |
 
## Currencies Supported
USD
 
## Bid Request Information
### Parameters
| Key | Required | Type | Description |
|---|---|---|---|
| bidRequestId | Yes | String | Bid slot identifier |
| hbadaptor | Yes | String | Header bidding wrapper name |
| url | Yes | String | Full page url |
| domain | Yes | String | Page domain |
| publisherId | Yes | String | Publisher identifier provided by undertone |
| placementId | No | Int | Optional placement identifier |
| sizes | Yes | int[][] | Eligible slot as sizes |
 
### Example
```javascript
//hb.undertone.com/hb?pid=12345&domain=test.com
{
	"x-ut-hb-params": [{
		"bidRequestId": "LLRNRqm9",
		"hbadaptor": "indexexchange",
		"url": "http://localhost:5837/public/debugger/adapter-debugger.html",
		"domain": "test.com",
		"placementId": "123",
		"publisherId": 12345,
		"sizes": [[300,
		250]]
	}]
}
```
 
## Bid Response Information
### Bid Example
```javascript
[{
	"ad": "<html><body><img src=\"https://creative-s.undertone.com/pic/unnamed.png\"><\/body><\/html>",
	"publisherId": 12345,
	"bidRequestId": "LLRNRqm9",
	"placementId": "123",
	"adId": 15,
	"campaignId": 2,
	"height": 250,
	"width": 300,
	"ttl": 720,
	"currency": "USD",
	"cpm": 5,
	"adaptor": "indexexchange",
	"netRevenue": "true"
}] 
```
### Pass Example
```javascript
[{
	"ad": "<html><body><img src=\"https://creative-s.undertone.com/pic/unnamed.png\"><\/body><\/html>",
	"publisherId": 12345,
	"bidRequestId": "LLRNRqm9",
	"placementId": "123",
	"adId": 0,
	"campaignId": 2,
	"height": 250,
	"width": 300,
	"ttl": 720,
	"currency": "USD",
	"cpm": 0,
	"adaptor": "indexexchange",
	"netRevenue": "true"
}] 

or Returns HTTP status code - 204 No Content
```
 
## Configuration Information
### Configuration Keys
| Key | Required | Type | Description |
|---|---|---|---|
| publisherId | Yes | String | publisher identifier provided by undertone |
| placementId | No | String | optional placement identifier |
### Example
```javascript
 {
  "publisherId": "12345",
  {
    "placementId": "471141",
    "sizes": [[300, 250]]
  }
} 
```
