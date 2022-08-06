import sanitizeHTML from "sanitize-html";

const cleanJam3iyaData = (req, res, next) => {
  if (
    typeof req.body.name !== "string" ||
    typeof req.body.description !== "string"
  )
    return res.status(400).json({ success: false, message: "Bad data" });

  req.cleanData = {
    ...req.body,
    name: sanitizeHTML(req.body.name.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
    description: sanitizeHTML(req.body.description.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
  };
  next();
};
const cleanActivityData = (req, res, next) => {
  if (
    typeof req.body.title !== "string" ||
    typeof req.body.content !== "string"
  )
    return res.status(400).json({ success: false, message: "Bad data" });
  req.cleanData = {
    ...req.body,
    title: sanitizeHTML(req.body.title.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
    content: sanitizeHTML(req.body.content.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
    jam3iya_id: req.params.id,
  };
  next();
};

const cleanDataDonation = (req, res, next) => {
  if (typeof req.body.amount !== "number")
    return res.status(400).json({ success: false, message: "BAD data" });
  req.cleanData = {
    user_id: req.user_id,
    amount: req.body.amount,
  };
  next();
};

const cleanDataComments = (req, res, next) => {
  if (typeof req.body.content !== "string")
    return res.status(400).json({ success: false, message: "BAD data" });
  req.cleanData = {
    user_id: req.user_id,
    content: sanitizeHTML(req.body.content.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
  };
  next();
};

const cleanDataReview = (req, res, next) => {
  if (
    typeof req.body.rating !== "number" ||
    typeof req.body.content !== "string"
  )
    return res.status(400).json({ success: false, message: "Bad data" });
  req.cleanData = {
    user_id: req.user_id,
    content: sanitizeHTML(req.body.content.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
  };
  next();
};

export {
  cleanJam3iyaData,
  cleanActivityData,
  cleanDataDonation,
  cleanDataComments,
  cleanDataReview,
};
