# ManyPetsHackathon (Friday 2nd September)

I decided to keep working on this as I found it a fun task and I'm keen to improve back-end learning!

## The brief:
Build a simplified version of a quotation API and accompanying dashboard that would be suitable to support the first part of the customer quotation journey
Your solution should:

- Quote a price for insuring a pet(s) taking into account, the pet’s species, breed, address and age
- Include a multi-pet discount for multiple pets
- A dashboard showing the number of quotes served today
- Stretch - allow a returning customer to continue and amend a previous quote

Some details to help:

- Take a base price of £120 / year (£10 a month)
- Add an increase of 5% to the price for each year up to 5 and 10% for each year past that up to 10
- Apply a 10% lower price to 3 breeds
- Apply a 15% higher price to 3 address areas
- Apply the multi-pet discount at 10% for each pet when 2 or more pets are included
- Please check the address is a valid UK address
- Please check the breed is a known breed
(Note for doing the validation, we’d like to see you integrate with a third party API (of your choice) to help you match addresses and breeds)

## On the day:
Our team managed to produce a quote taking into consideration the pet's age.
We used postman, with the following structure.

```
{
    "postcode":" S12 4hh",
    "baseprice":10,
    "pet": {
"type": "dog",
"age": 1,
"breed": "husky"
    }
}
```   
## Saturday 3rd September:

Altered the structure to include more than one pet:

```
{
    "postcode":" WV5 4hh",
    "baseprice":10,
    "pets": {
"type": "dog",
"age": 1,
"breed": "husky"
    },
    {
"type": "cat",
"age": 5,
"breed": "ginger"
    }
}
```

I wrote functions to calculate
- a discount depending on the pet's breed
- an increase if the owner lived in one of three areas
- a discount for more than one pet
BLOCKER: I couldn't work out how to get this to work for more than one pet. I experimented with initialising an empty 'index' variable at the top then looping over each array in the object using this, but the issue I found is that the server would crash if there was no 'index' found.

## Sunday 4th September:

I rewrote the functions from yesterday and instead used a forEach loop to compare each array inside the object. It's still quite clunky (and could definitely be improved with some shorter maths working out, but it works!) It now reliable calculates the quote prices for any number of pets.

Next up, I will add in the validation for the pet breeds and postcode.

