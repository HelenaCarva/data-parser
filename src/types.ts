// Timestamp: 2025-10-27 01:09:51

const validateEmail = (email: string): boolean => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
};

