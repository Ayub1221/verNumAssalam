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
