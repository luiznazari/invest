/* eslint-disable max-len */
const ptBr = {
  root: 'Erro: ',
  key: '{{!label}} ',
  any: {
    unknown: 'não é permitido',
    invalid: 'contém um valor inválido',
    empty: 'não é permitido ser vazio',
    required: 'é obrigatório',
    allowOnly: (error) => `${error.path.reduce((prev, curr) => `${prev}.${curr}`)} precisa ser um dos seguintes valores: ${error.context.valids}`,

    default: 'ocorreu um erro ao executar o método padrão'
  },
  alternatives: {
    base: 'não corresponde a nenhuma altenativa válida'
  },
  array: {
    base: 'deve ser uma matriz',
    includes: 'na posição {{pos}} não corresponde a nenhuma tipo válido',
    includesSingle: 'valor único de {{!label}} não corresponde a nenhuma tipo válido',
    includesOne: 'na posição {{pos}} falha, pois {{reason}}',
    includesOneSingle: 'valor único de {{!label}} falha, pois {{reason}}',
    includesRequiredUnknowns: 'não contém {{unknownMisses}} valor(es) obrigatório(s)',
    includesRequiredKnowns: 'não contém {{knownMisses}}',
    includesRequiredBoth: 'não contém {{knownMisses}} e {{unknownMisses}} outros valor(es) obrigatório(s)',
    excludes: 'na posição {{pos}} contém um valor excluído',
    excludesSingle: 'valor único de {{!label}} contém um valor excluído',
    min: 'deve conter no mínimo {{limit}} itens',
    max: 'deve conter menos que ou igual a {{limit}} itens',
    length: 'deve conter {{limit}} itens',
    ordered: 'na posição {{pos}}  falha, pois {{reason}}',
    orderedLength: 'na posição {{pos}} falha, pois a matriz deve conter até {{limit}} itens',
    ref: 'referências {{ref}} Que não é um inteiro positivo',
    sparse: 'não pode ser uma matriz esparsa',
    unique: 'na posição {{pos}} há um valor duplicado'
  },
  boolean: {
    base: 'deve ser boleano'
  },
  binary: {
    base: 'deve ser um buffer ou uma string',
    min: 'deve conter no mínimo {{limit}} bytes',
    max: 'deve conter no máximo {{limit}} bytes',
    length: 'deve conter {{limit}} bytes'
  },
  date: {
    base: 'deve ser um número em milisegundos ou uma data válida',
    format: 'deve ser UMA string com um DOS seguintes formatos {{format}}',
    strict: 'deve ser UMA data válida',
    min: 'deve ser maior ou igual a {{limit}}',
    max: 'deve ser menor ou igual a {{limit}}',
    isoDate: 'deve ser uma data no padrão ISO 8601',
    timestamp: {
      javascript: 'deve ser um timestamp válido ou número de milisegundos',
      unix: 'deve ser um timestamp válido Ou o número de Segundos'
    },
    ref: 'referencia a {{ref}} que não é uma data'
  },
  function: {
    base: 'deve ser uma função',
    arity: 'deve ter um arity de {{n}}',
    minArity: 'deve ter um arity maior ou igual a {{n}}',
    maxArity: 'deve ter um arity menor ou igual a {{n}}',
    ref: 'deve ser UMA referência de joi',
    class: 'deve ser UMA classe'
  },
  lazy: {
    base: '!!erro: lazy schema esquema deve ser definido',
    schema: '!!erro: lazy schema esquema função deve retornar um esquema'
  },
  object: {
    base: 'deve ser um objeto',
    child: '{{reason}}',
    min: 'deve conter no mínimo {{limit}} filhos',
    max: 'deve conter no máximo {{limit}} filhos',
    length: 'deve conter {{limit}} filhos',
    allowUnknown: (error) => `Erro: ${error.context.key} não é permitido`,
    with: '!!{{mainWithLabel}} peer obrigatório não encontrado: {{peerWithLabel}}',
    without: '!!{{mainWithLabel}} peer conflitante ou proibido: {{peerWithLabel}}',
    missing: 'deve conter ao menos {{peersWithLabels}}',
    xor: 'contém um conflito entre peers exclusivos {{peersWithLabels}}',
    or: 'deve conter algum dos peers {{peersWithLabels}}',
    and: 'contém {{presentWithLabels}} sem seus peers obrigatórios {{missingWithLabels}}',
    nand: '!!{{mainWithLabel}} não deve existir juntamente com {{peersWithLabels}}',
    assert: '!!{{ref}} validação falha, pois {{ref}} falhou em {{message}}',
    rename: {
      multiple: 'não pôde renomear {{from}} pois muitas renomeaçãoes estão desativadas e já havia sido renomeado para {{to}}',
      override: 'não pôde renomear {{from}} pois sobrescrever está desabilitado e {{to}} já existe',
      regex: {
        multiple: 'não pôde renomear {{from}} pois muitas renomeaçãoes estão desativadas e já havia sido renomeado para {{to}}',
        override: 'não pôde renomear {{from}} pois sobrescrever está desabilitado e {{to}} já existe'
      }
    },
    type: 'deve ser um instância de {{type}}',
    schema: 'deve ser UMA instância joi'
  },
  number: {
    base: 'deve ser um número',
    min: 'deve ser maior ou igual a {{limit}}',
    max: 'deve ser menor ou igual a {{limit}}',
    less: 'deve ser menor que {{limit}}',
    greater: 'deve ser maior que {{limit}}',
    float: 'deve ser um número decimal',
    integer: 'deve ser um número inteiro',
    negative: 'deve ser um número negativo',
    positive: 'deve ser um número positivo',
    precision: 'não pode conter mais que {{limit}} casas decimais',
    ref: 'referencia a {{ref}} na qual não é um número',
    multiple: 'deve ser múltiplo de {{multiple}}',
    port: 'deve ser UMA porta válida',
    map: 'deve ser um número Ou um DOS tipos {{enums}}'
  },
  string: {
    base: 'deve ser um texto',
    min: 'deve conter no mínimo {{limit}} caracteres',
    max: 'deve conter no máximo {{limit}} caracteres',
    length: 'deve conter {{limit}} caracteres',
    alphanum: 'deve conter apenas caracteres alpha-numéricos',
    token: "deve conter apenas caracteres alpha-numéricos ou underscore '_'",
    regex: {
      base: 'com o valor inválido',
      name: 'com o valor {{!value}} falha ao comparar ao padrão: {{name}}',
      invert: {
        base: 'com o valor {{!value}} falha ao comparar ao padrão: {{pattern}}',
        name: 'com o valor {{!value}} falha ao comparar ao padrão: {{name}}'
      }
    },
    email: 'deve ser um email válido',
    uri: 'dever ser uma uri válida',
    uriRelativeOnly: 'deve ser válida relativamente uri',
    uriCustomScheme: 'dever ser uma uri válida que se assemelhe ao padrão {{scheme}}',
    isoDate: 'deve ser uma data no padrão ISO 8601',
    guid: 'deve ser um GUID válido',
    hex: 'deve conter apenas valores hexadecimais',
    hexAlign: 'hex codificadas representação deve ser byte alinhado',
    base64: 'deve ser válida Base64 string',
    hostname: 'deve conter apenas hostname válido',
    normalize: 'deve ser o Unicode normalizado Na {{form}}',
    lowercase: 'deve conter apenas caracteres em caixa baixa',
    uppercase: 'deve conter apenas caracteres em caixa alta',
    trim: 'não deve haver espaços em branco',
    creditCard: 'deve ser um cartão de crédito',
    ref: 'referencia a {{ref}} que não é um número',
    ip: 'deve ser um IP válido com o CIDR {{cidr}}',
    ipVersion: 'deve ser um IP válido nas versões {{version}} com o CIDR {{cidr}}'
  }
}

module.exports = ptBr
