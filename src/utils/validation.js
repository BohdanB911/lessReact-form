export const validation = (fieldName, fieldValue) => {
    console.log(fieldName);
    console.log(fieldValue)
    const rules = {
        name: {
            rule: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
            errorMsg: 'Не корректное имя пользователя',
        },
        username: {
            rule: /^[A-Za-z0-9_]+$/u,
            errorMsg: 'Не корректный ввод',
        },
        email: {
            rule: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            errorMsg: 'Не корректный email'
        },
        phone: {
            rule: /^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/g,
            errorMsg: 'Не корректный номер',
        },

        password: {
            rule: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
            errorMsg: 'Не корректный password'
        },
        confirmpassword: {
            rule: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
            errorMsg: 'Не корректный password'
        }
    }
    if (!rules[fieldName].rule.test(fieldValue)) {
        return rules[fieldName].errorMsg
    }

    return null
}