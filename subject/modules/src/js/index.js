console.log('- - - - - - - - - - - - - ');

    // A module file can export more then one module, and
    // curly brace allow you to pick module by name
    // If you want to assign the imported module to
    // different name, use the 'as'  keyword.

    import { fn_a, var_a as var_a_newName } from './module-file-a';

    fn_a();
    console.log(var_a_newName);

    // Modules in file: './module-file-a'
    //
    //      export function fn_a() {
    //          console.log('module-file-a -> a()');
    //      }
    //      export var var_a = {a:'module-filea -> var_a'};


console.log('- - - - - - - - - - - - - ');

    // Among the many modules you export from a file there is a default one
    // if you want to pick this default module done use the curly brace

    import newName from  './module-file-a';
    console.log(typeof newName); // print 'object' or 'function' depends on which one is first

    // Modules in file: './module-file-a'
    //
    //      var var_b;
    //      export default var_b = {a:'module-filea -> default var_b'};
    //
    //      export default function fn_b() { }
    //

console.log('- - - - - - - - - - - - - ');
