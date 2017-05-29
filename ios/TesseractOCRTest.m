//
//  TesseractOCRTest.m
//  CameCame
//
//  Created by 2015mac08 on 8/25/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "TesseractOCRTest.h"

@implementation TesseractOCRTest

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(convertImg:(NSString *)image:(RCTResponseSenderBlock)callback) {

  G8Tesseract *tesseract = [[G8Tesseract alloc] initWithLanguage: @"eng"];
  UIImage *originImg = [UIImage imageNamed:image];

  tesseract.image= [self analyzeImage:originImg];
  
  tesseract.engineMode = G8OCREngineModeTesseractOnly;
  tesseract.pageSegmentationMode = G8PageSegmentationModeAuto;
  tesseract.delegate = self;

  NSLog(@"Tesseract OCR text recognition finished.");
  [tesseract recognize];

  NSString *recognizedText = tesseract.recognizedText;
  NSLog(@"Recognized text:\n%@", recognizedText);
  callback(@[[NSNull null], recognizedText]);
 
  
}

- (UIImage*) analyzeImage:(UIImage*)image  {
  // Create image rectangle with current image width/height
  CGRect imageRect = CGRectMake(0, 0, image.size.width, image.size.height);
  
  // Grayscale color space
  CGColorSpaceRef colorSpace = CGColorSpaceCreateDeviceGray();
  
  // Create bitmap content with current image size and grayscale colorspace
  CGContextRef context = CGBitmapContextCreate(nil, image.size.width, image.size.height, 8, 0, colorSpace, kCGImageAlphaNone);
  
  // Draw image into current context, with specified rectangle
  // using previously defined context (with grayscale colorspace)
  CGContextDrawImage(context, imageRect, [image CGImage]);
  
  // Create bitmap image info from pixel data in current context
  CGImageRef imageRef = CGBitmapContextCreateImage(context);
  
  // Create a new UIImage object
  UIImage *newImage = [UIImage imageWithCGImage:imageRef];
  
  // Release colorspace, context and bitmap information
  CGColorSpaceRelease(colorSpace);
  CGContextRelease(context);
  CFRelease(imageRef);
  
  CGSize newSize=CGSizeMake(147, 110);

  UIGraphicsBeginImageContext(newSize);
  [image drawInRect:CGRectMake(0, 0, newSize.width, newSize.height)];
  newImage = UIGraphicsGetImageFromCurrentImageContext();
  UIGraphicsEndImageContext();
  return newImage;
}

@end


