// Base url
const url = window.location.href; 

// Run Grok
const handleGrokSubmit = (e) => {
    e.preventDefault();
    const data = {
        text: document.querySelector('#text').value,
        pattern: document.querySelector('#pattern').value
    };
    fetch(url + 'grok', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    .then(res => res.json())
    .then(json => document.querySelector('#result').innerHTML = syntaxHighlight(json))
    .catch(err => console.log(err));
};

// Escape strings
const escapeString = (string) => {
    const escChar = ['\\', '"'];
    const escArray = [];
    string.split('').forEach(c => {
        if (escChar.includes(c)) escArray.push('\\');
        escArray.push(c);
    })
    return escArray.join('');
}

// Escape grok string and copy
const handleCopyEscape = (e) => {
    e.preventDefault();
    const escapedString = escapeString(document.querySelector('#pattern').value);
    navigator.clipboard.writeText(escapedString);
};

document.querySelector('#copyEscapedButton').addEventListener('click', handleCopyEscape);

// Syntax Highlighting
function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 4);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
};

// Event listeners for Grok
document.querySelector('#grokModalButton').addEventListener('click', () => {
    document.querySelector('#grokModal').style.display = 'block';
});
document.querySelector('#grokModalClose').addEventListener('click', () => {
    document.querySelector('#grokModal').style.display = 'none';
});
document.querySelector('#grokSubmit').addEventListener('click', handleGrokSubmit);
document.querySelector('#pattern').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleGrokSubmit(e);
    }
});

// Get sample logs via upload
const handleUpload = async (e) => {
    if (e.target.files[0]) {
        if (e.target.files[0].size > 5*1000000) {
            return alert('File too large. Upload must be less than 5mb.')
        };
        const reader = new FileReader();
        const content = await new Promise((resolve, reject) => {
            reader.onload = event => resolve(event.target.result)
            reader.onerror = error => reject(error)
            reader.readAsText(e.target.files[0])
        })
        document.querySelector('#samplesBox').value = content;
        document.querySelector("#acceptSamplesButton").removeAttribute('disabled');
    }
}

// Event listeners for Get Samples
document.querySelector('#getSamplesButton').addEventListener('click', () => {
document.querySelector('#getSamplesModal').style.display = 'block';
});
document.querySelector('#getSamplesClose').addEventListener('click', () => {
    document.querySelector('#getSamplesModal').style.display = 'none';
});
document.querySelector('#fileUploadButton').addEventListener('change', handleUpload);
document.querySelector('#acceptSamplesButton').addEventListener('click', (e) => {
    e.preventDefault();
    
    document.querySelector("#testModalButton").removeAttribute('disabled');
    document.querySelector('.step-first .icon-wrapper svg').style.display = 'block';
    document.querySelector('.step-first .text-wrapper span').style.display = 'block';
    document.querySelector('#getSamplesModal').style.display = 'none';
});
document.querySelector('#samplesBox').addEventListener('input', () => {
    if (document.querySelector('#samplesBox').value !== '') {
        document.querySelector("#acceptSamplesButton").removeAttribute('disabled');
    } else {
        document.querySelector("#acceptSamplesButton").setAttribute('disabled','');
    }
})

// Event listeners for Test
document.querySelector('#testModalButton').addEventListener('click', () => {
    document.querySelector('#testModal').style.display = 'block';
});
document.querySelector('#testModalClose').addEventListener('click', () => {
    document.querySelector('#testModal').style.display = 'none';
});

const handleSubmitTicket = e => {
    e.preventDefault();
    const data = {
        sawmill: editor.getValue(),
        samples: document.querySelector('#samplesBox').value,
        requester: document.querySelector('#email').value
    };
    console.log(data);
    fetch(url + 'support', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
};

document.querySelector('#submitTicket').addEventListener('click', handleSubmitTicket);

// Copy to clipboard
document.querySelector('#copy').addEventListener('click', () => {
    navigator.clipboard.writeText(editor.getValue());
})

// Pretty Print
const prettyPrint = () => {
    const text = editor.getValue();
    try {
        const json = JSON.parse(text);
        const pretty = JSON.stringify(json, null, 4);
        editor.setValue(pretty);
    } catch {
        alert('Not valid JSON')
    }
}

document.querySelector('#pretty').addEventListener('click', prettyPrint);

// Save editor state to local storage
const saveState = () => {
let text = editor.getValue();
window.localStorage.setItem('text', text);
}

let text = window.localStorage.getItem('text') || '{\n\t"steps": [\n\t\t{\n\t\t\t\n\t\t}\n\t]\n}';
window.onload = editor.setValue(text);
window.onbeforeunload = saveState;