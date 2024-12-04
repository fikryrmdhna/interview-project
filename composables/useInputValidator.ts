export default function useInputValidator() {
    function validate(value: any, type: string): string | null {
      if (type === 'number' && /[^0-9]/.test(value)) {
        return 'Only numbers are allowed. Please remove any letters or special characters.';
      }
      if (type === 'text' && /[^a-zA-Z]/.test(value)) {
        return 'Only letters are allowed. Please remove any numbers or special characters.';
      }
      return null;
    }
    return { validate };
  }
  