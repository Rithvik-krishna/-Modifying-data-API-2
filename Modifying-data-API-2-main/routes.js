const express = require('express');
const router = express.Router();

// Update an existing menu item
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error });
  }
});

//  Delete an existing menu item

router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } 
    catch (error) {
    res.status(400).json({ message: 'Error deleting item', error });
  }
});

module.exports = router;