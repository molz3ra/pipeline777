import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Aqui dizemos ao ESLint quais ambientes ele deve reconhecer
    languageOptions: { 
      globals: {
        ...globals.node,    // Reconhece comandos do Node (require, module.exports)
        ...globals.jest,    // Reconhece comandos do Jest (test, expect, describe)
        ...globals.browser  // Mantém o browser se você quiser usar no futuro
      } 
    }
  },
  pluginJs.configs.recommended,
];