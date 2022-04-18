import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
const Blogs = () => {
    return (
        <Accordion className='w-4/5 mt-20 h-[50vh] mx-auto'>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Differences between Authentication and Authorization
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-left'>
                        Authentication : Authentication is a process which check or verify that whether the requested act is allowed or not to get the Assurance . <br />
                        Authorization : Authorization is a process which verify that whether requested  user has right to access to a specific data or not.

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Why  are you using firebase? What are the options do you have to implement authentication
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-left'>
                        Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well. <br />
                        Steps for authentication: <br />
                        1.Create a new project in console.google.com <br />
                        2.npm install firebase <br />
                        3.Create firebase.init.js and import getAuth to export auth <br />
                    4.Firebase setting> Authentication>enable email and password <br />
                        5.Create login,signup Components and setup route <br />
                        6.Attach form field handler and form submit handler <br />
                        7.npm install --save react-firebase-hooks <br />
                        8.useCreateUserWithEmailAndPassword from according to firebase hooks <br />


                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What other services does firebase provides other than authentication?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-left'>
                        <h1>There are many services which Firebase provides, Most useful of them are:</h1> <br />
                        1.Cloud Firestore <br />
                        2.Cloud Functions <br />
                        3.Authentication <br />
                        4.Hosting<br />
                        5.Cloud Storage<br />
                        6.Google Analytics<br />
                        7.Predictions<br />
                        8.Cloud Messaging<br />
                        9.Dynamic Links<br />
                        10.Remote Config<br />

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default Blogs;