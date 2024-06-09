import js from "@eslint/js";

export default [
    js.configs.recommended,

   {
       languageOptions: {
            globals: {
                "console" : "readonly",
            },
        },
 
        rules: {
           "no-unused-vars": "warn",
           "no-undef": "warn",
           semi: "error",
       },

       files: ["**/callapi"],
   }
];
