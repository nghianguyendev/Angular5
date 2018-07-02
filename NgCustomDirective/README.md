# Directive

A directive is a custom HTML element that is used to extend the power of HTML

# Types of Directives

Angular 2 categorizes directives into 3 parts:
1. Directives with templates known as Components
2. Directives that creates and destroys DOM elements known as Structural Directives
3. Directives that manipulate DOM by changing behavior and appearance known as Attribute Directives

# Attribute vs Structural: When to use which? For example Hidden or If

There is always a little price to pay, though. Hiding will keep your DOM intact and you just need toggle around. But this might also make it more complex and leave the DOM messy. Sometimes, it might even come with performance issues. Removing is cleaner but it could be expensive if the element has to be re-created in the lifetime of the application. In that case, it is up to you to apply this simple rule and make your judgement based on your application structure and behavior.
