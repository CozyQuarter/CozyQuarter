
const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Dorm = require('../models/Dorm');
const User = require('../models/User');

// DELETE route to delete a review by ID
router.delete('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;

    try {
        // Find the review by ID and remove it
        const deletedReview = await Review.findByIdAndRemove(reviewId);

        // Log the reviewId before removal
        // console.log('User reviews before removal:', (await User.find()).map(user => user.reviews));
        console.log('Dorm reviews before removal:', (await Dorm.find()).map(dorm => dorm.reviews));


        if (!deletedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }
        // Remove the reference to the review from the corresponding User document
        await User.updateOne({ reviews: reviewId }, { $pull: { reviews: reviewId } });

        // Remove the reference to the review from the corresponding Dorm document
        await Dorm.updateOne({ reviews: reviewId }, { $pull: { reviews: reviewId } });

        // console.log('User reviews after removal:', (await User.find()).map(user => user.reviews));
        console.log('Dorm reviews after removal:', (await Dorm.find()).map(dorm => dorm.reviews));



        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
