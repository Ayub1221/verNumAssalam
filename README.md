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
| `name`                   | yes       | "Fruite, Chemical, Auto"                                 | enum ['buy', 'sell']    |
| `name_lang`              | yes       |                                                          | Sends lang choosen |
| ` icon`                  | yes       |                                                          | Orders             |
| ` order`                 | yes       | "1,2,3"                               | Data need to show                     |
| `is_available`           | yes       | "True / False"                               | XXXX                |
| ` company_id`              | yes       | "605a9a67d8df75fe33ee46e4"                               | region                  |





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
