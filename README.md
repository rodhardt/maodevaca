This React.js project goal is to practice and improve front-end developing skills.

"mão de vaca" is a brazilian expression which means a person is a penny-pincher. A completely literal translation is "cow's hand" and the reason this explanation matters is because the website design uses cows references. Thus now you're aware this is not random.

This is a simple financial control tool. After the user registers, those are the features:

- Add expenses with the most relevant info: value, date, name, group...
- Lists the expenses and allow the user to see more/change info and delete the whole expense,
- Register wage and payday,
- Since there is wage, payday and expenses registered, the page gives a balance of the period,
- Also, there is a piechart and horizontal bar chart showing the sum of expenses by group.

This application uses a fake REST API - JSON server, so the data doesn't last much and simplify the information flow with API.

Since the main reason is to practice front-end, there was 2 interesting features I didn't use libraries: 
- The horizontal bar chart, instead of using react-chartjs-2 like in the piechart,
- Inputs with the placeholder moving outside.

The result is on: https://maodevaca-six.vercel.app/
