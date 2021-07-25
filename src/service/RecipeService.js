import axios from "../custom-axios/axios";

const RecipeService = {

    fetchRecipes: () => {
        return Promise.resolve({data:[
            {id:"1",title:"t1",time:20, people:5,rate:3.1,types:["1","2","3"]},
            {id:"1",title:"t1",time:20, people:5,rate:-3.1,types:["1","2"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:10, people:5,rate:4.1,types:["1"]},
                {id:"1",title:"t1",time:34, people:5,rate:5.1,types:[]},
                {id:"1",title:"t1",time:34, people:5,rate:5.1},
            ]});
        return axios.get("/recipes");
    },

    getRecipe: (id) => {
        return Promise.resolve({data:
                {id:"1",title:"t1",time:20, people:5,rate:3.1,types:["1","2","3"],
                    by:"me",datetime:"08-05-2021",calories:200,
                    preparation:"Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or other type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection.\n" +
                        "\n" +
                        "The term originally referred to messages sent using the Short Message Service (SMS). It has grown beyond alphanumeric text to include multimedia messages using the Multimedia Messaging Service (MMS) containing digital images, videos, and sound content, as well as ideograms known as emoji (happy faces, sad faces, and other icons), and instant messenger applications (usually the term is used when on mobile devices).\n" +
                        "\n" +
                        "Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to participate in online contests. Advertisers and service providers use direct text marketing to send messages to mobile users about promotions, payment due dates, and other notifications instead of using postal mail, email, or voicemail.",
                    ingredients:["ingredient 1","ingredient 2","ingredient 3","ingredient 4","ingredient 5","ingredient 6"]
                }
        });

        return axios.get(`/recipe/${id}`);
    },


};

export default RecipeService;