// {
// "compilerOptions": {
// /_ Visit https://aka.ms/tsconfig to read more about this file _/
// /_ Projects _/
// // "incremental": true, /_ Save .tsbuildinfo files to allow for incremental compilation of projects. _/
// // "composite": true, /_ Enable constraints that allow a TypeScript project to be used with project references. _/
// // "tsBuildInfoFile": "./.tsbuildinfo", /_ Specify the path to .tsbuildinfo incremental compilation file. _/
// // "disableSourceOfProjectReferenceRedirect": true, /_ Disable preferring source files instead of declaration files when referencing composite projects. _/
// // "disableSolutionSearching": true, /_ Opt a project out of multi-project reference checking when editing. _/
// // "disableReferencedProjectLoad": true, /_ Reduce the number of projects loaded automatically by TypeScript. _/
// /_ Language and Environment _/
// "target": "es2016", /_ Set the JavaScript language version for emitted JavaScript and include compatible library declarations. _/
// // "lib": [], /_ Specify a set of bundled library declaration files that describe the target runtime environment. _/
// // "jsx": "preserve", /_ Specify what JSX code is generated. _/
// // "experimentalDecorators": true, /_ Enable experimental support for legacy experimental decorators. _/
// // "emitDecoratorMetadata": true, /_ Emit design-type metadata for decorated declarations in source files. _/
// // "jsxFactory": "", /_ Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. _/
// // "jsxFragmentFactory": "", /_ Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. _/
// // "jsxImportSource": "", /_ Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx_'. _/
// // "reactNamespace": "", /_ Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. _/
// // "noLib": true, /_ Disable including any library files, including the default lib.d.ts. _/
// // "useDefineForClassFields": true, /_ Emit ECMAScript-standard-compliant class fields. _/
// // "moduleDetection": "auto", /_ Control what method is used to detect module-format JS files. _/
// /_ Modules _/
// "module": "commonjs", /_ Specify what module code is generated. _/
// // "rootDir": "./", /_ Specify the root folder within your source files. _/
// // "moduleResolution": "node10", /_ Specify how TypeScript looks up a file from a given module specifier. _/
// // "baseUrl": "./", /_ Specify the base directory to resolve non-relative module names. _/
// // "paths": {}, /_ Specify a set of entries that re-map imports to additional lookup locations. _/
// // "rootDirs": [], /_ Allow multiple folders to be treated as one when resolving modules. _/
// // "typeRoots": [], /_ Specify multiple folders that act like './node_modules/@types'. _/
// // "types": [], /_ Specify type package names to be included without being referenced in a source file. _/
// // "allowUmdGlobalAccess": true, /_ Allow accessing UMD globals from modules. _/
// // "moduleSuffixes": [], /_ List of file name suffixes to search when resolving a module. _/
// // "allowImportingTsExtensions": true, /_ Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. _/
// // "rewriteRelativeImportExtensions": true, /_ Rewrite '.ts', '.tsx', '.mts', and '.cts' file extensions in relative import paths to their JavaScript equivalent in output files. _/
// // "resolvePackageJsonExports": true, /_ Use the package.json 'exports' field when resolving package imports. _/
// // "resolvePackageJsonImports": true, /_ Use the package.json 'imports' field when resolving imports. _/
// // "customConditions": [], /_ Conditions to set in addition to the resolver-specific defaults when resolving imports. _/
// // "noUncheckedSideEffectImports": true, /_ Check side effect imports. _/
// // "resolveJsonModule": true, /_ Enable importing .json files. _/
// // "allowArbitraryExtensions": true, /_ Enable importing files with any extension, provided a declaration file is present. _/
// // "noResolve": true, /_ Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. _/
// /_ JavaScript Support _/
// // "allowJs": true, /_ Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. _/
// // "checkJs": true, /_ Enable error reporting in type-checked JavaScript files. _/
// // "maxNodeModuleJsDepth": 1, /_ Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. _/
// /_ Emit _/
// // "declaration": true, /_ Generate .d.ts files from TypeScript and JavaScript files in your project. _/
// // "declarationMap": true, /_ Create sourcemaps for d.ts files. _/
// // "emitDeclarationOnly": true, /_ Only output d.ts files and not JavaScript files. _/
// // "sourceMap": true, /_ Create source map files for emitted JavaScript files. _/
// // "inlineSourceMap": true, /_ Include sourcemap files inside the emitted JavaScript. _/
// // "noEmit": true, /_ Disable emitting files from a compilation. _/
// // "outFile": "./", /_ Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. _/
// // "outDir": "./", /_ Specify an output folder for all emitted files. _/
// // "removeComments": true, /_ Disable emitting comments. _/
// // "importHelpers": true, /_ Allow importing helper functions from tslib once per project, instead of including them per-file. _/
// // "downlevelIteration": true, /_ Emit more compliant, but verbose and less performant JavaScript for iteration. _/
// // "sourceRoot": "", /_ Specify the root path for debuggers to find the reference source code. _/
// // "mapRoot": "", /_ Specify the location where debugger should locate map files instead of generated locations. _/
// // "inlineSources": true, /_ Include source code in the sourcemaps inside the emitted JavaScript. _/
// // "emitBOM": true, /_ Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. _/
// // "newLine": "crlf", /_ Set the newline character for emitting files. _/
// // "stripInternal": true, /_ Disable emitting declarations that have '@internal' in their JSDoc comments. _/
// // "noEmitHelpers": true, /_ Disable generating custom helper functions like '\_\_extends' in compiled output. _/
// // "noEmitOnError": true, /_ Disable emitting files if any type checking errors are reported. _/
// // "preserveConstEnums": true, /_ Disable erasing 'const enum' declarations in generated code. _/
// // "declarationDir": "./", /_ Specify the output directory for generated declaration files. _/
// /_ Interop Constraints _/
// // "isolatedModules": true, /_ Ensure that each file can be safely transpiled without relying on other imports. _/
// // "verbatimModuleSyntax": true, /_ Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. _/
// // "isolatedDeclarations": true, /_ Require sufficient annotation on exports so other tools can trivially generate declaration files. _/
// // "allowSyntheticDefaultImports": true, /_ Allow 'import x from y' when a module doesn't have a default export. _/
// "esModuleInterop": true, /_ Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. _/
// // "preserveSymlinks": true, /_ Disable resolving symlinks to their realpath. This correlates to the same flag in node. _/
// "forceConsistentCasingInFileNames": true, /_ Ensure that casing is correct in imports. _/
// /_ Type Checking _/
// "strict": true, /_ Enable all strict type-checking options. _/
// // "noImplicitAny": true, /_ Enable error reporting for expressions and declarations with an implied 'any' type. _/
// // "strictNullChecks": true, /_ When type checking, take into account 'null' and 'undefined'. _/
// // "strictFunctionTypes": true, /_ When assigning functions, check to ensure parameters and the return values are subtype-compatible. _/
// // "strictBindCallApply": true, /_ Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. _/
// // "strictPropertyInitialization": true, /_ Check for class properties that are declared but not set in the constructor. _/
// // "strictBuiltinIteratorReturn": true, /_ Built-in iterators are instantiated with a 'TReturn' type of 'undefined' instead of 'any'. _/
// // "noImplicitThis": true, /_ Enable error reporting when 'this' is given the type 'any'. _/
// // "useUnknownInCatchVariables": true, /_ Default catch clause variables as 'unknown' instead of 'any'. _/
// // "alwaysStrict": true, /_ Ensure 'use strict' is always emitted. _/
// // "noUnusedLocals": true, /_ Enable error reporting when local variables aren't read. _/
// // "noUnusedParameters": true, /_ Raise an error when a function parameter isn't read. _/
// // "exactOptionalPropertyTypes": true, /_ Interpret optional property types as written, rather than adding 'undefined'. _/
// // "noImplicitReturns": true, /_ Enable error reporting for codepaths that do not explicitly return in a function. _/
// // "noFallthroughCasesInSwitch": true, /_ Enable error reporting for fallthrough cases in switch statements. _/
// // "noUncheckedIndexedAccess": true, /_ Add 'undefined' to a type when accessed using an index. _/
// // "noImplicitOverride": true, /_ Ensure overriding members in derived classes are marked with an override modifier. _/
// // "noPropertyAccessFromIndexSignature": true, /_ Enforces using indexed accessors for keys declared using an indexed type. _/
// // "allowUnusedLabels": true, /_ Disable error reporting for unused labels. _/
// // "allowUnreachableCode": true, /_ Disable error reporting for unreachable code. _/
// /_ Completeness _/
// // "skipDefaultLibCheck": true, /_ Skip type checking .d.ts files that are included with TypeScript. _/
// "skipLibCheck": true /_ Skip type checking all .d.ts files. \*/
// }
// }
