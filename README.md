# verNumAssalam
Verification phone number - sending number to the Telegram  Channel |
``` * Create Bot from the Telegram and store the TOKEN | * create Channel and make the bot as the Admin | * Use link and replace with data in | And Enjoy the app```


*******************************************************************************************************************************************************************

# Market

MarketStates [ 'create', 'update', 'delete', 'response' ]?

## Category create


#### Parameters


| Name                     | Mandatory | Example                                                  | Note                    |
| ------------------------ | --------- | -------------------------------------------------------- | ----------------------- |
| `name`                   | yes       | "Fruite, Chemical, Auto"                                 | Choose    |
| `name_lang`              | yes       |                                                          | Sends lang choosen |
| ` icon`                  | yes       |                                                          | Orders             |
| ` order`                 | yes       | "1,2,3"                               | Data need to show                     |
| `is_available`           | yes       | "True / False"                               | XXXX                |
| ` company_id`              | yes       | "605a9a67d8df75fe33ee46e4"                               | ID                  |





### Errors

| HTTP Code | Code    | Message               | Data                      |
| --------- | ------- | --------------------- | ------------------------- |
| 200       | `0`     | Success               | Data                      |
| 404       | `51000` | Category not found        | Data related to the error |
| 405       | `51001` | Category already exists      | Description of the error  |

### Example requests/responses

#### Request:

```shell script
curl --location --request POST 'http://localhost:8000/offer/create' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIrOTk4OTA5OTY5OTY2IiwiaWF0IjoxNjE2NjcxMjQ5LCJleHAiOjE2MTcyNzYwNDl9.y3KCmqQef31cG9NGtY01JkggV0C1zIw5vwjjB7-Uvzg' \
--header 'Content-Type: application/json' \
--data-raw '{
      "name":"Сарваржон Гафуров",
      "name_lang":{"en":"Сарваржон Гафуров","ru":"Сарваржон Гафуров"},
      "category":"60a6451e4b9fbb842a74b940",
      "image":"/uploads/file-9a286df3d33d2a052216ee29e1ec885a.png"
      }'
```


#### Success response:

```XXX```

## Category update

#### Parameters

| Name                     | Mandatory | Example                                                  | Note                    |
| ------------------------ | --------- | -------------------------------------------------------- | ----------------------- |
| `name`                   | yes       | "Fruite, Chemical, Auto"                                 | Choose    |
| `name_lang`              | yes       |                                                          | Sends lang choosen |
| ` icon`                  | yes       |                                                          | Orders             |
| ` order`                 | yes       | "1,2,3"                               | Data need to show                     |
| `is_available`           | yes       | "True / False"                               | XXXX                |
| ` company_id`              | yes       | "605a9a67d8df75fe33ee46e4"                               | ID                  |

### Errors

| HTTP Code | Code    | Message               | Data                      |
| --------- | ------- | --------------------- | ------------------------- |
| 200       | `0`     | Success               | Data                      |
| 404       | `51000` | Category not found        | Data related to the error |
| 405       | `51001` | Category already exists      | Description of the error  |



#### Request:

```shell script
curl --location --request POST 'http://localhost:8000/offer/create' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIrOTk4OTA5OTY5OTY2IiwiaWF0IjoxNjE2NjcxMjQ5LCJleHAiOjE2MTcyNzYwNDl9.y3KCmqQef31cG9NGtY01JkggV0C1zIw5vwjjB7-Uvzg' \
--header 'Content-Type: application/json' \
--data-raw '{
      "name":"Сарваржон Гафуров",
      "name_lang":{"en":"Сарваржон Гафуров","ru":"Сарваржон Гафуров"},
      "category":"60a6451e4b9fbb842a74b940",
      "image":"/uploads/file-9a286df3d33d2a052216ee29e1ec885a.png"
      }'
```
### Example requests/responses

#### Success response:

```XXX```

## Category delete


#### Parameters


| Name  | Mandatory | Example                    | Note |
| ----- | --------- | -------------------------- | ---- |
| `_id` | yes       | "608806a44b11fdbb84369a11" | \_id |

### Example requests/responses

#### Request:

```XXX```

#### Success response:

```XXX```

## Category get pagin


#### Parameters

| Name          | Mandatory | Example | Note                         |
| ------------- | --------- | ------- | ---------------------------- |
| `limit`       | yes       | 10      | [1, 20]                      |
| `page`        | yes       | 1       | >1                           |
| `type`        | no        | "sell"  | enum [ 'buy','sell']         |
| `category_id` | no        | null    | category_id                  |
| `search`      | no        | "10001" | search by `lot` or item name |

### Errors

| HTTP Code | Code    | Message               | Data                      |
| --------- | ------- | --------------------- | ------------------------- |
| 200       | `0`     | Success               | Data                      |
| 404       | `51000` | Category not found        | Data related to the error |
| 405       | `51001` | Category already exists      | Description of the error  |


### Example requests/responses

#### Request:

```XXX```

#### Success response:

```XXX```
