// Edit the configuration then copy paste intro <script> tags
const forms = [
    "form id 1",
    "form id 2",
    "etc",
    "last form id"
];
const portalId = 'your portal id here';
const target = '#multistep-form';

// No need to worry about stuff below this point
const data = [];
const options = [];

const generateFormOptions = (form, index) => {
    return {
        portalId,
        formId: form,
        target,
        onFormReady: function(form) {
            if (index !== 0) {
                form.find('input[name="email"]').val(data[0].value).change();
            }
        },
        onFormSubmit: function(form) {
            if (data.length === 0) {
                const incoming = $(form).serializeArray();
                data.push(incoming[0]);
            }
        },
        onFormSubmitted: function() {
            if (index !== forms.length - 1) {
                $(target).empty();
                hbspt.forms.create(options[index + 1]);
            }
        }
    }
}

const multiStepForm = () => {
    forms.forEach((form, index) => {
        options.push(generateFormOptions(form, index));
    })
    hbspt.forms.create(options[0]);
}

multiStepForm();
