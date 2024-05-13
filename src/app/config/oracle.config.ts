export const oracleConfig = () => ({
    libDir          : process.env.ORACLE_LIB,
    connectString   : process.env.ORACLE_URL,
    user            : process.env.ORACLE_USER,
    password        : process.env.ORACLE_PASS,
});