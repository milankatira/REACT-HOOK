//TODO-- 1: Always write it inside the component or function
//TODO-- 2: Component name must be PascalCase (first letter should be uppercase)
//TODO-- 3: we can directly import or we can directly write it using React.hookName.
//TODO-- 4: Don’t call Hooks inside loops, conditions, or nested functions.

import React from 'react'

const RulesHook = () => {
    const [myName, setMyName] = React.useState('MILAN KATIRA');
    return (
        <div>
            <h1>{ myName }</h1>
        </div>
    )
}
export default RulesHook
