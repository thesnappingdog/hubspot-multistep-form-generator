### Multi-Step Form Generator for HubSpot.

This code will successfully generate a multistep form, no matter how many steps, as long as:

- Every form except the first one has 'email' field set as Hidden
- Style & Preview > 'Set as a raw HTML form' is enabled
- Make sure jQuery is loaded on your page
- Each 'step' is a unique form. Create as many forms as you need.
- Make sure you use 'Display thank you message' on every form except the last one

## How:

- Edit the forms array and paste in the formIds you
- Edit portalId variable to contain your... portal id.
- Edit target variable to your liking
- Make sure you load hubspots form functionality BEFORE the custom code.
- Copy paste the custom code into a <script></script> tag
- You may need to substitute <script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/v2.js"></script> with <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script> 

Todo:

- Transpile code to ES5 and see if it still works
- Figure out why code breaks when 'Set as a raw HTML form' is disabled

Feel free to do a pull request if you have improvements :+1: