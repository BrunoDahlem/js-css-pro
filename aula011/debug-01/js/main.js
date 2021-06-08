var escola = 'TargetTrust';
var cursos = ['Git','CSS Pro','JS Pro'];
var estilo = 'background:red;color:yellow;padding:10px;border-radius:10px;';

console.log('Exibe uma msg no console');

console.info('Exibe uma inf no console');

console.warn('Exibe um aviso no console', escola);

console.error('exibe um ERRO no console', cursos);

console.dir(cursos);

console.table(cursos);

console.log('%cUma mensagem customizada',estilo);