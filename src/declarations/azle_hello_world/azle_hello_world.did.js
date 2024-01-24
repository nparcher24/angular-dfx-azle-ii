export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getMessage' : IDL.Func([], [IDL.Text], ['query']),
    'setMessage' : IDL.Func([IDL.Text], [], []),
    'whoAmI' : IDL.Func([], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
