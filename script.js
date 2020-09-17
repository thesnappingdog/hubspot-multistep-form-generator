// Edit the configuration below
const forms = [
    "form id 1",
    "form id 2",
    "etc",
    "last form id"
]
const target = '#multistep-form'
const portalId = 'your portal id here'

// No need to worry about the below
const data = []
const options = []
let stepIndex = 0

const generateFormOptions = (index) => {
    return {
        portalId,
        formId: forms[index],
        target: target,
        onFormReady: function(form) {
            if (index !== 0 || index === forms.length - 1) {
                form.find('input[name="email"]').val(data[0].value).change();
            }
        },
        onFormSubmit: function(form) {
            if (data.length === 0) {
                var incoming = $(form).serializeArray();
                data.push(incoming[0])
            }
        },
        onFormSubmitted: function(form) {
            if (index !== forms.length - 1) {
                $('#demo').empty();
                hbspt.forms.create(options[index + 1])
            }
        }

    }
}

async function* generator(index) {
    while (index < forms.length) {
        yield options.push(generateFormOptions(index))
        ++index        
    }
}

const multiStepForm = () => {
    const formGenerator = generator(0);

    forms.forEach(() => {
        formGenerator.next();
    })
    hbspt.forms.create(options[options.length - 1]);
}

multiStepForm();
