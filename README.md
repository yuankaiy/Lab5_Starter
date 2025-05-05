# Lab 5 - Starter
**Name**: Yuan-Kai Yang

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   * Yes, we can use a unit test for things like if the message was created, if the text in the message is correct, if the recipent information is correct, and if it handles edge cases like en empty message. What unit tests would not be suitable for is the actual message relaying part of the feature, where you test if a message was successfully sent over to the recipient. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   *  Yes, this would be an appropriate use of unit tests. This would be a self-contained function that can return a boolean value. This does not require something more complex like network and databases.