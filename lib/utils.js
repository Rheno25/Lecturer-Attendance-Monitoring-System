export const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'blue';
      case 'Not Available':
        return 'red';
      default:
        return 'brown';
    }
  };