# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Meal.create(name: "BBQ Chicken Burrito Bowl", 
image: "https://www.simplyrecipes.com/thmb/YjmbgaGjb5-57UlfnVEOt6QkgxA=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__07__2016-08-03-BBQ-Chicken-Bowls-9-a194953f9f1940e3938265f2fd8d7813.jpg", 
recipe: "Make the barbecue sauce (or substitute 3/4 to 1 cup bottled sauce):
Mix all of the ingredients for the BBQ sauce (ketchup through cumin) in a saucepan and heat over medium heat. When the sauce starts bubbling, reduce the heat to low and simmer for 5 minutes, stirring frequently. (This sauce splatters everywhere once it heats up. Be prepared to wipe down your stovetop and countertops after making this!) Remove from heat.,
Cook the chicken (or substitute 2 cups shredded cooked chicken):
Place the chicken breasts in a 4-quart or larger pot with a lid and pour the chicken broth over top. The chicken should be covered by about an inch; add additional broth or water if needed. Place over high heat and bring to a boil. Reduce heat to low, cover, and cook for 10 minutes. Check that the chicken is cooked through and registers 165F in the thickest part. Cook another few minutes if needed. Use tongs to transfer the cooked chicken breasts to a cutting board to cool briefly.
Cook the rice (or substitute 3 cups cooked rice):
Combine the rice with 1/2 teaspoon of salt and 2 cups of water (or enough to cover by about an inch). Bring to a simmer over medium heat, then lower the heat and cover. Cook until the rice is tender, 35 to 45 minutes (or according to package instructions). Check occasionally and add more water if the pan seems dry before the rice is cooked.
Mix the chicken with the barbecue sauce:
Warm the barbecue sauce for a few minutes in a small pan or skillet over medium-high heat. Add the shredded chicken and stir to coat with the barbecue sauce. Leave the chicken in the pan until it has warmed through, about 2 to 3 minutes. Turn off heat.", 
ingredients: ["1 cup ketchup", 
"1/2 cup tomato sauce", 
"2 tablespoons distilled white vinegar (apple cider vinegar also works)", 
"2 tablespoons Worcestershire sauce", 
"1 tablespoon honey (light brown sugar or maple syrup also works)", 
"2 1/2 teaspoons paprika", 
"1/2 teaspoon granulated garlic", 
"1/2 teaspoon salt",
"1/4 teaspoon ground cumin"],
cooking_time: 25)

Meal.create(name: "Salmon Avocado Poke Bowl", 
image: "https://www.simplyrecipes.com/thmb/oRhSZuDTZO_KwqIaaHbS4CE4blk=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__03__2017-04-26-PokeBowls-6-8947f9af075f487aaa9c5afd5d829ba7.jpg", 
recipe: "Cook the rice:
Start the rice first and prep the rest of the ingredients while it cooks. Rinse the rice a few times under cool water, rubbing it gently with your hands, until the water isn't quite so cloudy. Then cook the rice according to package instructions or in a rice cooker. Fluff and keep covered until ready to eat.,
Prepare the salmon:
Gently pat the salmon all over to make sure that there are no pin bones still lodged in the fillet; if there are, use needle-nosed pliers to remove them. Cut the salmon into 1/2-inch cubes. Add the salmon into a medium bowl and set aside.
Make the dressing:
In a small bowl, stir together the soy sauce, rice vinegar, sesame oil, sugar and garlic powder. The garlic powder and sugar will not dissolve completely, but that's fine.
Combine the salmon and the dressing:
Add the sliced scallions to the bowl with the salmon, saving 1 to 2 tablespoons for garnish. Add the soy sauce mixture to the salmon and scallions. Using a large spoon or a rubber spatula, gently mix the salmon with the soy sauce mixture.
Serve:
Divide the rice between each bowl and then the salmon. Top with the rest of the sliced scallions, sliced cucumber, sliced radishes, diced avocado, furikake and red pepper flakes, if you like. The poke bowl is best enjoyed immediately.", 
ingredients: ["1 cup short-grain white rice",
"1 pound sashimi-grade salmon",
"1/4 cup soy sauce",
"1 1/2 tablespoons rice vinegar",
"1/2 tablespoon sugar",
"1 teaspoon toasted sesame oil",
"1/4 teaspoon garlic powder",
"2 scallions, thinly sliced"],
cooking_time: 20)

Meal.create(name: "Grilled Peaches", 
image: "https://www.simplyrecipes.com/thmb/HdvihpVI6HKzpKJLuRUzR7SZ8pc=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grilled_Peaches-LEAD-03-516100f9bb514401bbbeee6e962edeb9.jpg", 
recipe: "Preheat the grill to medium-high heat, at 400°F:
Clean and oil the grill grates.
Make the brown sugar topping:
In a small bowl, whisk together the brown sugar, granulated sugar, cinnamon, and salt.  Set aside.
Grill the peaches:
Brush the cut side of the peaches with the melted butter. Place the peaches on the hot grill, cut side-down, and cook for 2 to 3 minutes, until you can see clear grill marks. The grill remains uncovered the whole time. Flip and cook them cut side-up for 2 minutes.
Assemble and serve: 
To serve, place a grilled peach half on a plate and sprinkle 1/2 tablespoon brown sugar mixture on top while the peach is still warm. Top with a scoop of vanilla ice cream. Serve and enjoy!",
ingredients: ["2 tablespoons light brown sugar, tightly packed",
"2 tablespoons granulated sugar",
"1/2 teaspoon ground cinnamon",
"1/8 teaspoon salt",
"4 ripe yellow peaches or nectarines, cut in half and pit removed",
"2 tablespoons unsalted butter, melted",
"8 scoops vanilla ice cream, for serving"],
cooking_time: 16)

