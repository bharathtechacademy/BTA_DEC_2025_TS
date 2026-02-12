//WebElement : A web element is nothing but the element displayed within the UI. (e.g. text box, button, link, dropdown etc.)
//Locator: Locator is a default play rate method to identify the location of web elements within the web page. 

//There are multiple locators available in Playwright to locate the elements. 

//1.getByRole
//2.getByLabel
//3.getByText
//4.getByPlaceholder
//5.getByAltText  (for images)
//6.getByTitle
//7.getByTestId
//8.locator (css)
//9.locator (xpath)

//1.getByRole: this locator is going to help us to locate the element based on the role or nature of the element. 
//syntax: page.getByRole('role', {name:'name of the element'})

//if the element is a button, then the role will be 'button' and the name will be the text displayed on the button.
//if the element is a text box, then the role will be 'textbox' and the name will be the label associated with the text box.
/*
* role = 'textbox' for input fields
* role = 'link' for hyperlinks
* role = 'button' for buttons
* role = 'heading' for headings
* role = 'checkbox' for checkboxes
* role = 'radio' for radio buttons
* role = 'combobox' for dropdowns
* role = 'menuitem' for menu items
* role = 'tab' for tabs
* role = 'dialog' for dialog boxes
* role = 'alert' for alert messages
* role = 'table' for tables
* role = 'list' for lists
* role = 'listitem' for list items
*/

// Example: <h5>Student Registration Form</h5>  // this is a heading
//let heading = page.getByRole('heading', {name:'Student Registration Form'});

//2.getByLabel: this locator is going to help us to locate the element based on the label associated with the element.
//syntax: page.getByLabel('label name')
//Example: <label class="form-label" id="dateOfBirth-label">Date of Birth</label>
//let dateOfBirth = page.getByLabel('Date of Birth');

//3.getByText: this locator is going to help us to locate the element based on the text displayed on the element.
//syntax: page.getByText('text displayed on the element')
//Example: <h5>Student Registration Form</h5>
//let heading = page.getByText('Student Registration Form');

//4.getByPlaceholder: this locator is going to help us to locate the element based on the placeholder text displayed on the element.
//syntax: page.getByPlaceholder('placeholder text')
//Example: <input required="" autocomplete="off" placeholder="First Name" type="text" id="firstName" class=" mr-sm-2 form-control">
//let firstName = page.getByPlaceholder('First Name');

//5.getByAltText: this locator is going to help us to locate the element based on the alt text associated with the element. (for images)
//syntax: page.getByAltText('alt text')
//Example: <img src="images/logo.gif" alt="ParaBank" width="136" height="31" border="0" class="logo" title="ParaBank">
//let image = page.getByAltText('ParaBank');

//6.getByTitle: this locator is going to help us to locate the element based on the title associated with the element.
//syntax: page.getByTitle('title')
//Example: <img src="images/logo.gif" alt="ParaBank" width="136" height="31" border="0" class="logo" title="ParaBank">
//let image = page.getByTitle('ParaBank');

//7.getByTestId: this locator is going to help us to locate the element based on the test id associated with the element.
// syntax: page.getByTestId('test id')
//Example: <input type="text" id="firstName" class=" mr-sm-2 form-control" data-testid="firstName">
//let firstName = page.getByTestId('firstName');