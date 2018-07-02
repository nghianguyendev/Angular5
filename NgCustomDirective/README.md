# Attribute vs Structural: When to use which? For example Hidden or If

There is always a little price to pay, though. Hiding will keep your DOM intact and you just need toggle around. But this might also make it more complex and leave the DOM messy. Sometimes, it might even come with performance issues. Removing is cleaner but it could be expensive if the element has to be re-created in the lifetime of the application. In that case, it is up to you to apply this simple rule and make your judgement based on your application structure and behavior.
