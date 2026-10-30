#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>

void renderSvgToPng(NSString *svgPath, NSString *pngPath, int width, int height) {
    NSImage *image = [[NSImage alloc] initWithContentsOfFile:svgPath];
    if (!image) {
        NSLog(@"Failed to load %@", svgPath);
        return;
    }
    NSBitmapImageRep *rep = [[NSBitmapImageRep alloc]
        initWithBitmapDataPlanes:NULL
                      pixelsWide:width
                      pixelsHigh:height
                   bitsPerSample:8
                 samplesPerPixel:4
                        hasAlpha:YES
                        isPlanar:NO
                  colorSpaceName:NSCalibratedRGBColorSpace
                     bytesPerRow:0
                    bitsPerPixel:0];
    
    [NSGraphicsContext saveGraphicsState];
    [NSGraphicsContext setCurrentContext:[NSGraphicsContext graphicsContextWithBitmapImageRep:rep]];
    [[NSGraphicsContext currentContext] setImageInterpolation:NSImageInterpolationHigh];
    
    [image drawInRect:NSMakeRect(0, 0, width, height)
             fromRect:NSZeroRect
            operation:NSCompositingOperationCopy
             fraction:1.0];
    
    [NSGraphicsContext restoreGraphicsState];
    
    NSData *pngData = [rep representationUsingType:NSBitmapImageFileTypePNG properties:@{}];
    [pngData writeToFile:pngPath atomically:YES];
    NSLog(@"Rendered %@ (%dx%d)", pngPath, width, height);
}

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSString *svgPath = @"/Users/tc./Desktop/Beh/Treningovy-dennik/pwa-icon.svg";
        renderSvgToPng(svgPath, @"/Users/tc./Desktop/Beh/Treningovy-dennik/apple-touch-icon.png", 180, 180);
        renderSvgToPng(svgPath, @"/Users/tc./Desktop/Beh/Treningovy-dennik/icon-192.png", 192, 192);
        renderSvgToPng(svgPath, @"/Users/tc./Desktop/Beh/Treningovy-dennik/icon-512.png", 512, 512);
    }
    return 0;
}
