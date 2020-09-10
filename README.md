# ts_course

- [ts_course](#ts_course)
  - [Section 1 : Getting Started](#section-1--getting-started)
  - [Section 2 : TypeScript Basics & Basic Types](#section-2--typescript-basics--basic-types)
    - [01-ts-benefits](#01-ts-benefits)
    - [02-js-types](#02-js-types)
    - [03-core-data-types](#03-core-data-types)
    - [04-type-inferrance-and-assignments](#04-type-inferrance-and-assignments)
    - [05-object-types](#05-object-types)
    - [06-arrays](#06-arrays)
    - [07-tuples](#07-tuples)
    - [08-enums](#08-enums)
    - [09-union-types](#09-union-types)
    - [10-literal-types](#10-literal-types)
    - [11-type-aliases](#11-type-aliases)
    - [12-function-types](#12-function-types)
    - [13-unknown-never](#13-unknown-never)
  - [Section 3 : The TypeScript Compiler (and its Configuration)](#section-3--the-typescript-compiler-and-its-configuration)
    - [00-starting-setup](#00-starting-setup)
    - [01-watch-mode-tsconfig](#01-watch-mode-tsconfig)
    - [02-excluding](#02-excluding)
    - [03-config-finished](#03-config-finished)
    - [04-chrome-debugging](#04-chrome-debugging)
  - [Section 4 : Next-generation JavaScript & TypeScript](#section-4--next-generation-javascript--typescript)
    - [01-starting-setup](#01-starting-setup)
    - [02-let-conts-arrow-functions](#02-let-conts-arrow-functions)
    - [03-spread-operator](#03-spread-operator)
    - [04-spread-and-rest](#04-spread-and-rest)
    - [05-destructuring](#05-destructuring)
    - [06-finished](#06-finished)
  - [Section 5 : Classes & Interfaces](#section-5--classes--interfaces)
    - [01-starting-setup](#01-starting-setup-1)
    - [02-class-and-this-basics](#02-class-and-this-basics)
    - [03-private-and-public](#03-private-and-public)
    - [04-shorter-init-syntax](#04-shorter-init-syntax)
    - [05-readonly](#05-readonly)
    - [06-inheritance](#06-inheritance)
    - [07-overriding-and-protected](#07-overriding-and-protected)
    - [08-getters-and-setters](#08-getters-and-setters)
    - [09-abstract](#09-abstract)
    - [10-private-constructors](#10-private-constructors)
    - [11-basic-interfaces](#11-basic-interfaces)
    - [12-implementing-interfaces](#12-implementing-interfaces)
    - [13-interface-inheritance](#13-interface-inheritance)
    - [14-interface-function-types](#14-interface-function-types)
    - [15-optional-properties](#15-optional-properties)
  - [Section 6 : Advanced Types](#section-6--advanced-types)
    - [01-starting-setup](#01-starting-setup-2)
    - [02-intersection-types](#02-intersection-types)
    - [03-type-guards](#03-type-guards)
    - [04-discriminated-unions](#04-discriminated-unions)
    - [05-type-casting](#05-type-casting)
    - [06-index-properties](#06-index-properties)
    - [08-optional-chaining-nullish-coalescing](#08-optional-chaining-nullish-coalescing)
  - [Section 7 : Generics](#section-7--generics)
    - [01-starting-setup](#01-starting-setup-3)
    - [02-first-generic-method](#02-first-generic-method)
    - [03-another-generic-function](#03-another-generic-function)
    - [04-keyof-constraints](#04-keyof-constraints)
    - [05-generic-classes](#05-generic-classes)
    - [06-finished](#06-finished-1)
  - [Section 8 : Decorators](#section-8--decorators)
  - [Section 9 : Practice Time! Let's build a Drag & Drop Project](#section-9--practice-time-lets-build-a-drag--drop-project)
  - [Section 10 : Modules & Namespaces](#section-10--modules--namespaces)
  - [Section 11 : Using Webpack with TypeScript](#section-11--using-webpack-with-typescript)
  - [Section 12 : 3rd Party Libraries & TypeScript](#section-12--3rd-party-libraries--typescript)
  - [Section 13 : Time to Practice!](#section-13--time-to-practice)
  - [Section 14 : React.js & TypeScript](#section-14--reactjs--typescript)
  - [Section 15 : Node.js + Express & TypeScript](#section-15--nodejs--express--typescript)
  - [Section 16 : Course Roundup](#section-16--course-roundup)
## Section 1 : Getting Started

![](image/whyts.png)
![](image/2020-08-24-10-14-05.png)
![](image/2020-08-24-10-19-37.png)

## Section 2 : TypeScript Basics & Basic Types
see `section2` examples folder

![](2020-09-08-09-59-44.png)
### 01-ts-benefits
### 02-js-types
### 03-core-data-types
### 04-type-inferrance-and-assignments
### 05-object-types
### 06-arrays
### 07-tuples
### 08-enums
### 09-union-types
### 10-literal-types
### 11-type-aliases
### 12-function-types
### 13-unknown-never

https://www.typescriptlang.org/docs/handbook/basic-types.html

## Section 3 : The TypeScript Compiler (and its Configuration)

https://www.typescriptlang.org/tsconfig

see `section3` examples folder

### 00-starting-setup
### 01-watch-mode-tsconfig
### 02-excluding
### 03-config-finished
### 04-chrome-debugging

you can run `watch` compile in this way

```
tsc app.ts -w
```

or if you have multiple files, create `tsconfig.json` with

```
tsc --init
```

and then with only `tsc` compile all files, or combined in `watch` mode :

```
tsc --watch
```

or

```
tsc -w
```

These links might also be interesting:

[tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[Compiler Config](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

[VS Code TS Debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)

## Section 4 : Next-generation JavaScript & TypeScript
see `section4` examples folder

### 01-starting-setup
### 02-let-conts-arrow-functions
### 03-spread-operator
### 04-spread-and-rest
### 05-destructuring
### 06-finished

https://kangax.github.io/compat-table/es6/

> [reference-vs-primitive-values](https://academind.com/learn/javascript/reference-vs-primitive-values/)


## Section 5 : Classes & Interfaces

see `section5` examples folder

![](2020-09-09-16-04-06.png)
### 01-starting-setup
### 02-class-and-this-basics
### 03-private-and-public
### 04-shorter-init-syntax
### 05-readonly
### 06-inheritance
### 07-overriding-and-protected
### 08-getters-and-setters
### 09-abstract
### 10-private-constructors
### 11-basic-interfaces
### 12-implementing-interfaces
### 13-interface-inheritance
### 14-interface-function-types
### 15-optional-properties

[Public_class_fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
[Inheritance_and_the_prototype_chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

These links might also be interesting:

[More on (JS) Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[More on TS Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

## Section 6 : Advanced Types

see `section6` examples folder

### 01-starting-setup
### 02-intersection-types
### 03-type-guards
### 04-discriminated-unions
### 05-type-casting
### 06-index-properties
### 08-optional-chaining-nullish-coalescing

These links might also be interesting:

[More on Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

## Section 7 : Generics

see `section7` examples folder

### 01-starting-setup
### 02-first-generic-method
### 03-another-generic-function
### 04-keyof-constraints
### 05-generic-classes
### 06-finished

[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[utility-types](https://www.typescriptlang.org/docs/handbook/utility-types.html)


<!-- 0 / 12|52 min -->

## Section 8 : Decorators

see `section8` examples folder

<!-- 0 / 16|1 h 17 min -->

## Section 9 : Practice Time! Let's build a Drag & Drop Project

<!-- 0 / 20|2 h 41 min -->

## Section 10 : Modules & Namespaces

<!-- 0 / 11|50 min -->

## Section 11 : Using Webpack with TypeScript

<!-- 0 / 9|33 min -->

## Section 12 : 3rd Party Libraries & TypeScript

<!-- 0 / 7|30 min -->

## Section 13 : Time to Practice!

<!-- 0 / 8|27 min -->

## Section 14 : React.js & TypeScript

<!-- 0 / 13|45 min -->

## Section 15 : Node.js + Express & TypeScript

<!-- 0 / 9|43 min -->

## Section 16 : Course Roundup

<!-- 0 / 1|3 min -->
